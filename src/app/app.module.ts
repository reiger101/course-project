import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ShoppingComponent, RecipesComponent, ShoppingListComponent, ShoppingListEditComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
