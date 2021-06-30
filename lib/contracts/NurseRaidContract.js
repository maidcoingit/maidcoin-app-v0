"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
const NurseRaid_json_1 = __importDefault(require("./artifacts/contracts/NurseRaid.sol/NurseRaid.json"));
const Contract_1 = __importDefault(require("./Contract"));
const MaidCoinContract_1 = __importDefault(require("./MaidCoinContract"));
const MaidContract_1 = __importDefault(require("./MaidContract"));
class NurseRaidContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.NurseRaid, NurseRaid_json_1.default.abi, []);
    }
    async getRaidCount() {
        return await this.contract.raidCount();
    }
    async getRaid(raidId) {
        const [entranceFee, nursePart, maxRewardCount, duration, endBlock] = await this.contract.raids(raidId);
        return {
            entranceFee,
            nursePart: nursePart.toNumber(),
            maxRewardCount: maxRewardCount.toNumber(),
            duration: duration.toNumber(),
            endBlock: endBlock.toNumber(),
        };
    }
    async getChallenger(raidId, owner) {
        const [enterBlock, maid] = await this.contract.challengers(raidId, owner);
        return {
            enterBlock: enterBlock.toNumber(),
            maid,
        };
    }
    async checkDone(raidId) {
        return await this.contract.checkDone(raidId);
    }
    async create(entranceFee, nursePart, maxRewardCount, duration, endBlock) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.create(entranceFee, nursePart, maxRewardCount, duration, endBlock));
    }
    async enter(raidId, maid) {
        const contract = await this.loadWalletContract();
        const owner = await Wallet_1.default.loadAddress();
        if (contract !== undefined && owner !== undefined) {
            const raid = await this.getRaid(raidId);
            console.log(await MaidCoinContract_1.default.allowance(owner, this.address) < raid.entranceFee);
            console.log(await MaidContract_1.default.isApprovedForAll(owner, this.address));
            if (await MaidCoinContract_1.default.allowance(owner, this.address) < raid.entranceFee ||
                await MaidContract_1.default.isApprovedForAll(owner, this.address) !== true) {
                const deadline = Math.ceil(Date.now() / 1000) + 1000000;
                const maidCoinSigned = await Wallet_1.default.signERC20Permit(await MaidCoinContract_1.default.getName(), "1", MaidCoinContract_1.default.address, this.address, ethers_1.constants.MaxUint256, await MaidCoinContract_1.default.getNonce(owner), deadline);
                const maidSigned = await Wallet_1.default.signERC721PermitAll(await MaidContract_1.default.getName(), "1", MaidContract_1.default.address, this.address, await MaidContract_1.default.getNonceForAll(owner), deadline);
                await contract.enterWithPermitAll(raidId, maid === undefined ? ethers_1.constants.MaxUint256 : maid, deadline, maidCoinSigned.v, maidCoinSigned.r, maidCoinSigned.s, maidSigned.v, maidSigned.r, maidSigned.s);
            }
        }
    }
    async exit(raidId) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.exit(raidId));
    }
}
exports.default = new NurseRaidContract();
//# sourceMappingURL=NurseRaidContract.js.map