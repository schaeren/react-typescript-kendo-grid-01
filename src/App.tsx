import React, { Component } from 'react';
import './App.css';

import {Grid, GridColumn, GridSortChangeEvent} from '@progress/kendo-react-grid';
//import '@progress/kendo-theme-default/dist/all.css';
// used for sorting grid column 
import { orderBy, SortDescriptor} from '@progress/kendo-data-query';
//import {GridSortChangeEvent} from '@progress/'

interface AppProps { }
interface AppState {
  products: {name: string; price: number;}[],
  sort: SortDescriptor[]
}

class App extends Component<AppProps, AppState> {
  private appName: string = 'My first app with React, TypeScript, KendoReact Grid';

  constructor(props: AppProps) {
    super(props);
    this.state = {
      products: [
        { name: "Product One", price: 10 },
        { name: "Product Two", price: 20 },
        { name: "Product Three", price: 30 },
        { name: "Product Four", price: 39.99 }
      ],
      sort: [
        {field: 'price', dir: 'asc'} as SortDescriptor
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>{this.appName}</h1>
        <Grid data={orderBy(this.state.products, this.state.sort)} sortable sort={this.state.sort} onSortChange={(e)=>this.onSortChanged(e)}>
          <GridColumn field="name" title="Product name"/>
          <GridColumn field="price" title="Price"/>
        </Grid>
      </div>
    );
  }

  public onSortChanged(event: GridSortChangeEvent): void {
    for (let sortDescriptor of event.sort) {
      console.log(`Sort ${sortDescriptor.field} ${sortDescriptor.dir}`);
      this.setState({sort : event.sort});
    }
  }
}

export default App;
