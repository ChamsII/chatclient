import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tcc-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {
  usernameFormControl = new FormControl('', [Validators.required]);
  previousUsername: string;
  userNameSave;

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public params: any) {

    //if( window.localStorage.getItem('chat-nuktwa-private') && window.localStorage.getItem('chat-nuktwa-private') != undefined ){
    if( window.localStorage.getItem('chat-nuktwa-ha-nuktwa') && window.localStorage.getItem('chat-nuktwa-ha-nuktwa') != undefined ){
      //this.userNameSave = window.localStorage.getItem('chat-nuktwa-private')
      this.userNameSave = window.localStorage.getItem('chat-nuktwa-ha-nuktwa')
    }else{
      this.userNameSave = undefined
    }
    this.previousUsername = params.username ? params.username : undefined;
    this.params.username = this.userNameSave
  }

  
  ngOnInit() {
  }

  public onSave(): void {
    //window.localStorage.setItem( 'chat-nuktwa-private' , this.params.username )
    window.localStorage.setItem( 'chat-nuktwa-ha-nuktwa' , this.params.username )
    this.dialogRef.close({
      username: this.params.username,
      dialogType: this.params.dialogType,
      previousUsername: this.previousUsername
    });
  }
}
