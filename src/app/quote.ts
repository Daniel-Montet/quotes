export class Quote {
    public showDescription:boolean;
    constructor(public _editorname?:any,public _quote?:string, public _authorname?:string, public _editorid?:number, public _upvote?:number, public _downvote?:number ,public completeDate?:Date){
        this.showDescription=false
    }

}
