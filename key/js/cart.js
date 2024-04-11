var ajaxUrl = '/wp-admin/admin-ajax.php';
jQuery(document).ready(function ($) {
  $('.cart-item .counter-button').on('click', function () {
    let $this = $(this);
    let changeNum = Number($this.attr('data-quantity-change'));
    let input = $this.parent().find('.counter-input');
    let val = Number(input.val());

    let cart_item_id = $this.val();
    val = val + changeNum;
    input.val(val);
    if (val == 0) {
      deleteFromCart($this.val());
      return;
    }
    updateQuantityInCart(cart_item_id, val);
  });

  $('.js-item-delete').on('click', function (e) {
    e.preventDefault();
    let cart_item_id = $(this).attr('data-item-delete');
    // console.log(cart_item_id);
    deleteFromCart(cart_item_id);
  });

  $('.co-sidebar-toggler').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('co-sidebar-toggler--opend')) {
      $(this).addClass('co-sidebar-toggler--opend');
      $('.co-sidebar').removeClass('co-sidebar--hidden@sm');
      return;
    }
    $(this).removeClass('co-sidebar-toggler--opend');
    $('.co-sidebar').addClass('co-sidebar--hidden@sm');
  });

  $('#category-order').on('change', function () {
    const url = new URL(window.location); // == window.location.href
    url.searchParams.set('sort-category', $(this).val());
    history.pushState(null, null, url); // == url.href
	 location.reload();
  });
});

function deleteFromCart(cart_item_id) {
  $.ajax({
    type: 'POST',
    url: ajaxUrl,
    dataType: 'json',
    data: {
      action: 'delete_product_from_cart',
      cart_item_id,
    },
    success: function (data) {
      updateCartHeaderBage(data.count);
      updateCartTotal(data);
      removeItemFromList(cart_item_id);
      console.log(data);
      if (data.count == 0) {
        location.reload();
      }
    },
  });
}

function updateCartTotal(data) {
  $('[data-cart-positions-count]').html(data.count);
  $('#cart-total').html(data.summ);
}

function removeItemFromList(cart_item_id) {
  $('[data-item-id=' + cart_item_id + ']').remove();
}

function updateQuantityInCart(cart_item_id, qty) {
  $.ajax({
    type: 'POST',
    url: ajaxUrl,
    dataType: 'json',
    data: {
      action: 'update_quantity_in_cart',
      cart_item_id,
      qty,
    },
    success: function (data) {
      updateCartHeaderBage(data.count);
      updateCartTotal(data);
      $('.cart-item[data-item-id=' + cart_item_id + '] .item-total').html(data.product_total);
    },
  });
}

function updateCartHeaderBage(count) {
  let bage = $('.header__cart .header__control-bage');
  bage.text(count);
  if (Number(count) > 0) {
    bage.removeClass('cart-empty');
  } else {
    bage.addClass('cart-empty');
  }
}
