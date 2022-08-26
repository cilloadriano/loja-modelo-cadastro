export class ClienteModel {
    constructor(
        public id: number,
        public nomeCli: string,
        public endCli: string,
        public limiteCred: number,
        public limiteParc: number
    ) { }

}