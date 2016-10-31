import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Session } from '../models'

@Component({
    selector: 'unreviewedTalk',
    template: `
        <div [hidden]="!session">
            <div  class="panel panel-default">
                <div class="panel-heading">
                {{session?.title}}
                </div>
                <div class="panel-body">
                    <p><strong>{{session?.length | talkDuration}}</strong></p>
                    <p>{{session?.abstract}}</p>
                </div>
            </div>
            
            <span>Are you interested in this session?</span>
            <button class="btn btn-primary btn-xs" (click)="yes()">Yes</button>
            <button class="btn btn-warning btn-xs" (click)="no()">No</button>
        </div>
        <div [hidden]="session" class="alert alert-success" role="alert">
            You have reviewed all the submitted sessions
        </div>
    `
})

export class UnreviewedTalkComponent {
    // bindings: {
    //  session: '=',
    //  voteYes: '&',
    //  voteNo: '&'
    // },
    @Input() session: Session;
    @Output() voteYes: EventEmitter<string> = new EventEmitter<string>();
    @Output() voteNo: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    yes() {
        this.voteYes.emit('');
    }

    no() {
        this.voteNo.emit('');
    }
}