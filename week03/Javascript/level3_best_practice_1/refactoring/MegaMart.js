// 장바구니 제품을 담고있는 전역변수입니다.
let shopping_cart = [];
// 장바구니 제품들의 금액 합계를 담고있는 전역변수 입니다.
let shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  // 장바구니에 제품을 담기 위해 cart 배열에 레코드를 추가
  shopping_cart.push({
    name: name,
    price: price,
  });
  // 장바구니의 제품이 바뀌었기 때문의 금액 합계를 업데이트
  calc_cart_total();
}

// function calc_cart_total() {
//   shopping_cart_total = 0;
//   for (let i = 0; i < shopping_cart.length; i++) {
//     let item = shopping_cart[i];
//     shopping_cart_total += item.price; // 모든 제품값 더하기
//   }
//   set_cart_total_dom(); // 금액 합계를 반영하기 위해 DOM 업데이트
// }

function update_shipping_icons() {
  //페이지에 있는 모든 구매 버튼을 가져와 반복문을 적용합니다.
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    // 무료 배송이 가능한지 확인합니다.
    if (item.price + shopping_cart_total >= 20) button.show_free_shipping_icon();
    // 결정에 따라 무료 배송 아이콘을 보여주거나 보여주지 않습니다.
    else button.hide_free_shipping_icon();
  }
}

// function calc_cart_total() {
//   shopping_cart_total = 0;
//   for (let i = 0; i < shopping_cart.length; i++) {
//     let item = shopping_cart[i];
//     shopping_cart_total += item.price;
//   }
//   set_cart_total_dom();
//   update_shipping_icons(); // 아이콘을 업데이트하는 코드를 추가
// }

function update_tax_dom() {
  // 함수를 새로 만들어 줍니다.
  set_tax_dom(shopping_cart_total * 0.1); // dom을 업데이트 해줍니다.
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom(); // 페이지에 세금을 업데이트 하기 위해 코드를 추가합니다.
}

let total = 0;
function add_to_total(amount) {
  console.log("Old total : " + total);
  total += amount;
  return total;
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom(); // 페이지에 세금을 업데이트 하기 위해 코드를 추가합니다.
}

function calc_cart_total() {
  // shopping_cart를 인자로 전달합니다.
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function calc_total(cart) {
  let total = 0; // 전역변수 대신 인자를 만들어 사용합니다.
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function add_item(cart, name, price) {
  let new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price,
  });
  return new_cart;
}

function update_tax_dom() {
  set_tax_dom(mult(shopping_cart_total));
}

function mult(total) {
  return total * 0.1;
}

function update_tax_dom() {
  set_tax_dom(mult(shopping_cart_total));
}

function update_shipping_icons() {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function postIsFree(buttons, cart_total) {
  let buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let item = button.item;
    if (gets_free_shipping(item, cart_total)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function gets_free_shipping(item, cart_total) {
  return item.price + cart_total >= 20;
}
