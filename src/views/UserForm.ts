import { User, UserProps } from '../models/User';
import { View } from './View';


export class UserForm extends View<User, UserProps> {
  

  eventsMap(): { [key: string]: () => void} {
    return {
      // 'click:button': this.onButtonClick,
      // 'mouseenter:h1': this.onHoverHeader,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-user': this.onSaveUser
    }
  };

  onSaveUser = (): void => {
    this.model.save();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  onSetAgeClick = (): void => {
    // console.log('click');
    this.model.setRandomAge();
  }

  // onHoverHeader(): void {
  //   console.log('Hover');
  // }

  // onButtonClick(): void {
  //   console.log('Hi there!');
  // }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change name</button>
        <button class='set-age'>Set Random Age</button>
        <button class='save-user'>Save</button>
      </div>
    `;
  }
}
