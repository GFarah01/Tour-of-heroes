import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the FormsModule so that Angular would recognize and apply the ngModel directive.
import { FormsModule } from "@angular/forms";

// HttpClient is Angular's mechanism for communicating with a remote server over HTTP.
import { HttpClientModule } from '@angular/common/http';

/**
 * Install the In-memory Web API package from npm with the following command:
 * npm install angular-in-memory-web-api --save
 */
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

// import AppRouting module
import { AppRoutingModule } from './app-routing.module';

// import components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashbordComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The forRoot() configuration method takes an InMemoryDataService class that primes the in-memory database.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
