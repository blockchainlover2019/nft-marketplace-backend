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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveWatchlistDTO = exports.AddWatchlistDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const valid_address_decorator_1 = require("../../../decorators/valid-address.decorator");
class AddWatchlistDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    (0, valid_address_decorator_1.ValidAddress)(),
    __metadata("design:type", String)
], AddWatchlistDTO.prototype, "address", void 0);
exports.AddWatchlistDTO = AddWatchlistDTO;
class RemoveWatchlistDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiProperty)(),
    (0, valid_address_decorator_1.ValidAddress)(),
    __metadata("design:type", Array)
], RemoveWatchlistDTO.prototype, "addresses", void 0);
exports.RemoveWatchlistDTO = RemoveWatchlistDTO;
//# sourceMappingURL=update-watchlist.dto.js.map