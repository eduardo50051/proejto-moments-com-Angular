import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {

@Input() btnText!: string;

submit(){
  console.log("enviou!");
  
}

}
