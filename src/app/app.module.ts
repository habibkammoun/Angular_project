import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatRComponent } from './components/chat-r/chat-r.component';
import { SendComponent } from './components/send/send.component';
import { TextComponent } from './components/text/text.component';
import { SearchComponent } from './components/search/search.component';
import { StatusComponent } from './components/status/status.component';
import { ChatTextComponent } from './components/chat-text/chat-text.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ChatComponent,
    ChatRComponent,
    SendComponent,
    TextComponent,
    SearchComponent,
    StatusComponent,
    ChatTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
