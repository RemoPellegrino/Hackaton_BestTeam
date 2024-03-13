export class NotReallyJest {
    static _report;
    static GetReport() {
        if (this._report === null || this._report === undefined) {
            this._report = new Report();
        }
    }





    static ReportStep(status, message){
        this.GetReport().ReportStep()
    } 
}



export class Report {
    steps =[];


    ReportStep(status, message) {
        this.steps.push({
            "status" : status,
            "message" : message
        });
    }
}
