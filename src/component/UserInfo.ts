import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import MaidCoinContract from "../contracts/MaidCoinContract";
import Wallet from "../ethereum/Wallet";

export default class UserInfo extends DomNode {

    private userInfo: DomNode;
    private maidCoinInfo: DomNode;

    constructor() {
        super(".user-info");
        this.append(
            this.userInfo = el(".user-info", "Loading..."),
            this.maidCoinInfo = el(".maid-coin"),
        );

        this.loadUserInfo();
        this.loadMaidCoin();

        Wallet.on("connect", this.connectHandler);
        MaidCoinContract.on("Transfer", this.transferHandler);
    }

    private connectHandler = () => {
        this.loadUserInfo();
        this.loadMaidCoin();
    };

    private transferHandler = async (from: string, to: string, amount: BigNumber) => {
        const address = await Wallet.loadAddress();
        if (from === address || to === address) {
            this.loadMaidCoin();
        }
    };

    private async loadUserInfo() {
        const owner = await Wallet.loadAddress();
        if (owner === undefined) {
            this.userInfo.empty().append(
                el("a.connect-button", "Connect", {
                    click: () => Wallet.connect(),
                }),
            );
        } else {
            this.userInfo.empty().append(
                el(".address", owner),
            );
        }
    }

    private async loadMaidCoin() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const balance = await MaidCoinContract.balanceOf(owner);
            this.maidCoinInfo.empty().append(
                el(".balance", `Your Balance: ${utils.formatEther(balance)}`),
            );
        }
    }

    public delete(): void {

        Wallet.off("connect", this.connectHandler);
        MaidCoinContract.off("Transfer", this.transferHandler);

        super.delete();
    }
}