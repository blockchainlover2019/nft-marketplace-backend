"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_dynamoose_1 = require("nestjs-dynamoose");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async isUsernameAvailable(username) {
        const user = await this.userModel
            .scan('username')
            .eq(username)
            .limit(1)
            .exec();
        return !user.count;
    }
    async updateUser(user) {
        return this.userModel.update(user);
    }
    async updateUserTransaction(user) {
        return this.userModel.transaction.update(user);
    }
    async updatePassword(id, password) {
        return this.userModel.update(id, { password });
    }
    async isEmailAvailable(email) {
        const user = await this.userModel.query('email').eq(email).limit(1).exec();
        return !user.count;
    }
    async getUserByEmail(email) {
        const user = await this.userModel.query('email').eq(email).limit(1).exec();
        return user.count ? user[0] : null;
    }
    async create(user) {
        return this.userModel.create(user);
    }
    async findAll() {
        return this.userModel.scan().exec();
    }
    async findById(id) {
        return this.userModel.get(id);
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(password, salt);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_dynamoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map