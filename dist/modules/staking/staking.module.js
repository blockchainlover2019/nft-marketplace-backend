"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_dynamoose_1 = require("nestjs-dynamoose");
const staking_controller_1 = require("./staking.controller");
const staking_schema_1 = require("./staking.schema");
const staking_service_1 = require("./staking.service");
let StakingModule = class StakingModule {
};
StakingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_dynamoose_1.DynamooseModule.forFeature([
                {
                    name: 'Stakings',
                    schema: staking_schema_1.StakingSchema,
                }
            ])
        ],
        providers: [staking_service_1.StakingService],
        exports: [staking_service_1.StakingService],
        controllers: [staking_controller_1.StakingController],
    })
], StakingModule);
exports.StakingModule = StakingModule;
//# sourceMappingURL=staking.module.js.map