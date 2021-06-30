import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";

export default abstract class ERC721Contract<CT extends ethers.Contract> extends Contract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async getNonce(id: BigNumberish): Promise<BigNumber> {
        return await this.contract.nonces(id);
    }

    public async getNonceForAll(owner: string): Promise<BigNumber> {
        return await this.contract.nonces(owner);
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }
}
