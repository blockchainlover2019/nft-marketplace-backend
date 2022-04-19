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
exports.UpdatePasswordDTO = exports.VerifyOtpDTO = exports.ForgotPasswordDTO = void 0;
const class_validator_1 = require("class-validator");
class ForgotPasswordDTO {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ForgotPasswordDTO.prototype, "email", void 0);
exports.ForgotPasswordDTO = ForgotPasswordDTO;
class VerifyOtpDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyOtpDTO.prototype, "otp", void 0);
exports.VerifyOtpDTO = VerifyOtpDTO;
class UpdatePasswordDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdatePasswordDTO.prototype, "email", void 0);
exports.UpdatePasswordDTO = UpdatePasswordDTO;
//# sourceMappingURL=forgotPassword.dto.js.map