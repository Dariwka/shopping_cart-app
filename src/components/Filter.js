import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../store/actions";
import Navigation from "./Navigation";

class Filter extends Component {
  render() {
    return (
      <div>
        <div>Filter result</div>
      </div>
    );
  }
}
export default Filter;
// class Filter extends Component {
//   render() {
//     return !this.props.filteredProducts ? (
//       <div>Loading...</div>
//     ) : (
//       <div className="filter">
//         <div className="filter-result">
//           {this.props.filteredProducts.length} Products
//         </div>
//         <div className="filter-size">
//           Filter{" "}
//           <select
//             value={this.props.size}
//             onChange={(e) =>
//               this.props.filterProducts(this.props.products, e.target.value)
//             }
//           >
//             <option value="">ALL</option>
//             <option value="salt scrubs">salt scrubs</option>
//             <option value="sugar scrubs">sugar scrubs</option>
//             <option value="oils">Essential Oils</option>
//           </select>
//         </div>
//       </div>
//     );
//   }
// }
// export default connect(
//   (state) => ({
//     category: state.products.category,
//     products: state.products.items,
//     filteredProducts: state.products.filteredItems,
//   }),
//   {
//     filterProducts,
//   }
// )(Filter);
