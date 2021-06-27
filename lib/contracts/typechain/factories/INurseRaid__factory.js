"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INurseRaid__factory = void 0;
const ethers_1 = require("ethers");
class INurseRaid__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.INurseRaid__factory = INurseRaid__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "ChangeMaidPowerToRaidReducedBlock",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "entranceFee",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "nursePart",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "maxRewardCount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
        ],
        name: "Create",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "challenger",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "maid",
                type: "uint256",
            },
        ],
        name: "Enter",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "challenger",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "Exit",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "checkDone",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "entranceFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nursePart",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxRewardCount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
        ],
        name: "create",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maid",
                type: "uint256",
            },
        ],
        name: "enter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_maid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v1",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r1",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s1",
                type: "bytes32",
            },
            {
                internalType: "uint8",
                name: "v2",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r2",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s2",
                type: "bytes32",
            },
        ],
        name: "enterWithPermitAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "exit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "maid",
        outputs: [
            {
                internalType: "contract IMaid",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maidCoin",
        outputs: [
            {
                internalType: "contract IMaidCoin",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maidPowerToRaidReducedBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "nursePart",
        outputs: [
            {
                internalType: "contract INursePart",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rng",
        outputs: [
            {
                internalType: "contract IRNG",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=INurseRaid__factory.js.map