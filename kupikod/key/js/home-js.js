var $ = jQuery;
try {
    let widget = '.widget-type_system_widget_v4_alerts';
    let $widget = $('.widget-type_system_widget_v4_alerts');
    let alertsSettings = $widget.find('[data-micro-alerts-settings]').data('micro-alerts-settings');

    function replaceAlertCheckIcon(message) {
        let iconCheck = '<span class="icon-check" style="margin-right:5px;"></span>';
        if (message.indexOf('✓') != -1) {
            return message.replace(/✓/gi, iconCheck);
        } else {
            return `${iconCheck} ${message}`;
        }
    }

    function replaceAlertWarningIcon(message) {
        let iconWarning = '<span class="icon-exclamation-triangle" style="margin-right:5px;"></span>';
        if (message.indexOf('⚠') != -1) {
            return message.replace(/⚠/gi, iconWarning);
        } else {
            return `${iconWarning} ${message}`;
        }
    }

    EventBus.subscribe('error-feedback:insales:ui_feedback', function(data) {
        let iconWarning = '<span class="icon-exclamation-triangle" style="margin-right:5px;"></span>';
        $.each(data.errors, function(i, val) {
            let errorText = typeof val == 'string' ? val : val[0];

            microAlert(iconWarning + errorText, 5000, {
                modificator: 'warning-notice'
            });
        });
    });

    EventBus.subscribe('send-feedback:insales:ui_feedback', function(data) {
        let success_feedback = alertsSettings['success_feedback'];
        let preorder = false;

        if ($(data.form[0]).find('[name="is-preorder-form"]').length) {
            success_feedback = alertsSettings['success_preorder'];
            preorder = true;
        }

        if ($(window).width() >= '767' && preorder) {
            microAlert(replaceAlertCheckIcon(success_feedback), 5000, {
                modificator: 'success-notice'
            });
        } else if ($(window).width() <= '768' && !preorder) {
            microAlert(replaceAlertCheckIcon(success_feedback), 5000, {
                modificator: 'success-notice'
            });
        }
    });

    EventBus.subscribe('overload:insales:compares', function() {
        let overload_compares = alertsSettings['overload_compares'];
        microAlert(replaceAlertWarningIcon(overload_compares), 5000, {
            modificator: 'warning-notice'
        });
    });

    EventBus.subscribe('add_item:insales:compares', () => {
        let add_item_compares = alertsSettings['add_item_compares'];

        microAlert(replaceAlertCheckIcon(add_item_compares), 5000, {
            modificator: 'success-notice'
        });
    });

    EventBus.subscribe('remove_item:insales:compares', () => {
        let remove_item_compares = alertsSettings['remove_item_compares'];
        microAlert(remove_item_compares, 5000, {
            modificator: 'success-notice'
        });
    });

    EventBus.subscribe('add_item:insales:favorites_products', () => {
        let add_item_favorites = alertsSettings['add_item_favorites'];
        microAlert(replaceAlertCheckIcon(add_item_favorites), 5000, {
            modificator: 'success-notice'
        });
    });

    EventBus.subscribe('remove_item:insales:favorites_products', () => {
        let remove_item_favorites = alertsSettings['remove_item_favorites'];
        microAlert(remove_item_favorites, 5000, {
            modificator: 'success-notice'
        });
    });

    EventBus.subscribe(['overload:quantity:insales:product', 'unchange_quantity:insales:ui_add-cart-counter'], () => {
        let overload_quantity = alertsSettings['overload_quantity'];
        microAlert(replaceAlertWarningIcon(overload_quantity), 5000, {
            modificator: 'warning-notice'
        });
    });

    EventBus.subscribe('add_items:insales:cart', function(data) {
        if (data.action.button) {
            let success_cart = alertsSettings['success_cart'];
            let btn_add_cart_counter_attr = $(data.action.button).is("[data-add-cart-counter-btn]") || $(data.action.button).is("[data-add-cart-counter]");
            let show_alert_always = $(data.action.button.prevObject).is("[data-show-alert-always]");

            if (btn_add_cart_counter_attr && data.action.currentItems && data.action.currentItems.length) {
                let current_id = data.action.currentItems[0].variant_id;
                let first_added = Cart.order.order_lines.filter(i => {
                    return i.variant_id == current_id && i.quantity == 1;
                });

                if (first_added.length || show_alert_always) {
                    microAlert(replaceAlertCheckIcon(success_cart), 3000, {
                        modificator: 'success-notice'
                    });
                }
            }
        }
    });

    if (window.location.pathname == '/' && Cookies.get('lite_preorder')) {
        let success_feedback = alertsSettings['success_preorder'];

        microAlert(replaceAlertCheckIcon(success_feedback), 5000, {
            modificator: 'success-notice'
        });
        Cookies.remove('lite_preorder');
    }

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_alerts" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_callback_modal_1';
    let $widget = $('.widget-type_system_widget_v4_callback_modal_1');
    $(document).ready(function() {
        $(widget).find(".js-hide-modal").on("click", function() {
            $(widget).removeClass("is-show-fullscreen");
        });

        $(widget).on("click", function(event) {
            if ($(event.target).closest(widget + ' .layout__content').length) {
                return;
            }

            $(widget).removeClass("is-show-fullscreen");
        });
    });

    EventBus.subscribe('send-feedback:insales:ui_feedback', (data) => {
        data.form.addClass("is-sended");

        setTimeout(function() {
            data.form.removeClass("is-sended");
            $(widget).removeClass("is-show-fullscreen");
        }, 5000);
    });

    EventBus.subscribe('show-modal-feedback:insales:ui_feedback', (data) => {
        if (data.modal_id && data.modal_id == "default") {
            $(widget).addClass("is-show-fullscreen");
        }
    });

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_callback_modal_1" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_modal_cookie_1';
    let $widget = $('.widget-type_system_widget_v4_modal_cookie_1');
    $widget.ready(function() {
        if ($widget.find('.cookie-banner').length) {
            if (!Cookies.get('was')) {
                $widget.addClass("is-show-fullscreen");
            }

            $('.js-cookies-button').on('click', function() {
                $widget.removeClass("is-show-fullscreen");
                Cookies.set('was', true, {
                    expires: 365,
                    path: '/'
                });
            })
        }
    });

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_modal_cookie_1" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_notification_add_to_cart_1';
    let $widget = $('.widget-type_system_widget_v4_notification_add_to_cart_1');
    EventBus.subscribe('add_items:insales:cart', function(data) {
        if (data.action.button) {
            var btn_add_cart_counter_attr = $(data.action.button[0]).attr("data-add-cart-counter");

            if (typeof btn_add_cart_counter_attr === typeof undefined && data.action.currentItems && data.action.currentItems.length) {

                var photo_area = $(widget).find(".notification-product__photo");
                var title_area = $(widget).find(".notification-product__title");
                var price_area = $(widget).find(".notification-product__price");
                var count_area = $(widget).find(".notification-product__count");

                photo_area.find("img").remove();
                title_area.text('');
                price_area.text('');
                count_area.text('');

                var product_info = data.action.currentItems[0];
                var variant_id = product_info.variant_id;
                var count = data.action.items[variant_id] || 1;

                $('<img src="' + product_info.first_image.medium_url + '"/>').appendTo($(widget).find(".notification-product__photo"));
                $(widget).find(".notification-product__title").html(product_info.title);
                $(widget).find(".notification-product__price").html(Shop.money.format(product_info.sale_price));
                $(widget).find(".notification-product__count").text(count + ' ' + Shop.units.getName(product_info.product.unit) + '.');

                $(widget).addClass("is-show-fullscreen");
            }
        }
    });

    $(document).ready(function() {
        $(widget).find(".js-hide-notification").on("click", function() {
            $(widget).removeClass("is-show-fullscreen");
        });

        $(widget).on("click", function(event) {
            if ($(event.target).closest(widget + ' .layout__content').length) {
                return;
            }

            $(widget).removeClass("is-show-fullscreen");
        });
    });

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_notification_add_to_cart_1" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_preorder_1';
    let $widget = $('.widget-type_system_widget_v4_preorder_1');
    $(function() {
        EventBus.subscribe('show-preorder:insales:ui_product', (data) => {
            let content_field = $(widget).find('[name="content"]');
            let product_label = content_field.data("preorderProductLabel");
            let variant_label = content_field.data("preorderVariantLabel");

            let product_info = product_label + data.product;

            if (data.variant) {
                product_info += "<br/>" + variant_label + data.variant;
            }

            $(widget).find('[name="content"]').val(product_info);
            $(widget).addClass("is-show-fullscreen");
        });

        $(document).ready(function() {
            $(widget).find(".js-hide-preorder").on("click", function() {
                $(widget).removeClass("is-show-fullscreen");
            });

            $(widget).on("click", function(event) {
                if ($(event.target).closest(widget + ' .layout__content').length) {
                    return;
                }

                $(widget).removeClass("is-show-fullscreen");
            });
        });

        EventBus.subscribe('send-feedback:insales:ui_feedback', (data) => {
            data.form.addClass("is-sended");

            setTimeout(function() {
                data.form.removeClass("is-sended");
                $(widget).removeClass("is-show-fullscreen");
            }, 5000);
        });
    });

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_preorder_1" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_button_on_top_1';
    let $widget = $('.widget-type_system_widget_v4_button_on_top_1');
    let scroll_timeout;

    $widget.find(".js-go-top-page").on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(window).on("scroll", function() {
        clearTimeout(scroll_timeout);
        scroll_timeout = setTimeout(function() {
            showButtonOnTop($widget.find(".js-go-top-page"));
        }, 50);
    });

    function showButtonOnTop(btn) {
        if ($(window).scrollTop() >= $(window).height()) {
            btn.addClass("is-show");
        } else {
            btn.removeClass("is-show");
        }
    }

    $(function() {
        EventBus.subscribe(['widget:input-setting:insales:system:editor', 'widget:change-setting:insales:system:editor'], (data) => {
            if (data.setting_name == 'icon-view') {
                let btn = $('[data-widget-id="' + data.widget_id + '"] .js-go-top-page');
                btn.find("> span").removeClass().addClass(data.value);
            }
        });
    });
} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_button_on_top_1" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_cart_fixed_button_1';
    let $widget = $('.widget-type_system_widget_v4_cart_fixed_button_1');
    if (window.location.pathname == '/new_order') {
        $widget.find(".js-cart-fixed-btn").addClass("is-no-visible");
    }

    let scroll_timeout;

    $(window).on("scroll", function() {
        clearTimeout(scroll_timeout);
        scroll_timeout = setTimeout(function() {
            showCartFixedBtn($widget.find(".js-cart-fixed-btn"));
        }, 50);
    });

    function showCartFixedBtn(btn) {
        if ($(window).scrollTop() >= 100) {
            btn.addClass("is-show");
        } else {
            btn.removeClass("is-show");
        }
    }

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_cart_fixed_button_1" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_bottom_navigation_bar_1';
    let $widget = $('.widget-type_system_widget_v4_bottom_navigation_bar_1');
    $(function() {
        let location_path = window.location.pathname;

        if (location_path.indexOf('client_account') !== -1) {
            $widget.find(".navigation-bar__item-profile").addClass("is-active is-cur-page");
        }

        $widget.find("[data-show-navigation-bar-panel]").on("click", function() {
            let navigation_bar_item = $(this);
            let panel_name = navigation_bar_item.data("showNavigationBarPanel");
            let panel = $widget.find('[data-navigation-bar-panel="' + panel_name + '"]');

            if (panel.is(".is-show")) {
                bodyScrollLock.clearAllBodyScrollLocks();
                panel.removeClass("is-show");
                $('header').css('display', 'block');

                navigation_bar_item.removeClass("is-active");
                $widget.find(".navigation-bar__item.is-cur-page").addClass("is-active");
            } else {
                let targetElement = panel.get(0);
                if (targetElement) {
                    bodyScrollLock.disableBodyScroll(targetElement);
                }

                $('header').css('display', 'none');

                let panel_bottom_pos = navigation_bar_item.parents(".layout").innerHeight();
                $widget.find('[data-navigation-bar-panel].is-show').removeClass("is-show");
                panel.css("bottom", panel_bottom_pos).addClass("is-show");

                if (panel_name == "search") {
                    setTimeout(function() {
                        panel.find("[data-search-field]").focus();
                    }, 500);
                }

                $widget.find(".navigation-bar__item.is-active").removeClass("is-active");
                navigation_bar_item.addClass("is-active");
            }
        });

        $widget.find(".navigation-bar__item-home").on("click", function() {
            if (location_path == "/") {
                $widget.find('.navigation-bar-panel.is-show').removeClass("is-show");
                $widget.find(".navigation-bar__item.is-active").removeClass("is-active");
                $widget.find(".navigation-bar__item.is-cur-page").addClass("is-active");
            }
        });

        $widget.find(".js-hide-navigation-bar-panel").on("click", function() {
            $widget.find('[data-navigation-bar-panel].is-show').removeClass("is-show");
            $widget.find(".navigation-bar__item.is-active").removeClass("is-active");
            $widget.find(".navigation-bar__item.is-cur-page").addClass("is-active");
            bodyScrollLock.clearAllBodyScrollLocks();
            $('header').css('display', 'block');
        });

        $widget.find(".collections__menu .is-current").addClass("is-show");
        $widget.find(".js-show-submenu").on("click", function() {
            let cur_item = $(this).parents(".collections__item:first");
            cur_item.toggleClass("is-show");
        });

        $widget.find(".js-show-collections-search").on("click", function() {
            let search_block = $(this).parents(".collections-search");
            search_block.toggleClass("is-show");

            if (search_block.is(".is-show")) {
                setTimeout(function() {
                    search_block.find(".collections-search__field").focus();
                }, 50);
            }
        });
    });

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_bottom_navigation_bar_1" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_banner_list_18';
    let $widget = $('.widget-type_system_widget_v4_banner_list_18');
    $(function() {
        $widget.each(function(index, el) {
            new LazyLoad({
                container: $(el).get(0),
                elements_selector: '.lazyload'
            });
        });
    });

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_banner_list_18" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_system_widget_v4_page_banner_1_1';
    let $widget = $('.widget-type_system_widget_v4_page_banner_1_1');
    $(function() {
        $widget.each(function(index, el) {
            new LazyLoad({
                container: $(el).get(0),
                elements_selector: '.lazyload'
            });
        });
    });

} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_page_banner_1_1" throwed an error: "' + error.stack + '"')
};


try {
    $(document).ready(function() {
        $('.variations_select').on('change', function (e) {
            let optionPrice = $("option:selected", this).attr('data-price');
            let optionId = $("option:selected", this).attr('data-id');
            $('.product__price-cur').html(optionPrice + ' ₽');
            $('.button.add-cart-counter__btn').val(optionId);
            $('.add-cart-counter').removeClass('is-add-cart');
            $('.button.add-cart-counter__controls-btn').val(optionId);
            $('span[data-add-cart-counter-count]').html(0);
        });
    });
} catch (error) {
    console.error('Widget "widget-type_system_widget_v4_page_banner_1_1" throwed an error: "' + error.stack + '"')
};

// need fix
try {
    let widget = '.widget-type_widget_v4_header_7_ef6252f3fa9d1231cede5648ef531b61';
    let $widget = $('.widget-type_widget_v4_header_7_ef6252f3fa9d1231cede5648ef531b61');
    /* eslint-disable linebreak-style */
    var isTouch = !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    var mobilePoint = 768;
    $(function() {
        if (isTouch) {
            $(widget).find(".header").addClass("is-touch");
            $(widget).find('.with-arrow').click(function(event) {
                event.preventDefault();
            });
        }

        if ($(window).width() >= mobilePoint) {
            $(widget).find(".js-cut-list-collections").cutList({
                moreBtnTitle: '<span class="icon icon-ellipsis-h"></span>',
                showMoreOnHover: false
            });
        }

        if ($(widget).find(".header__collections .is-current").length) {
            if ($(window).width() < mobilePoint || $(widget).css("--catalog-location") == 'side-panel') {
                $(widget).find(".header__collections .is-current").addClass("is-show");


                // $('.header__collections').addClass('sub-open');
                $('.menu').addClass('hidden');
                $('.side-panel__content').scrollTop(0);
                $('.header__collections-submenu-content').scrollTop(0);
            }
        }

        $(".header__collections-item").hover(
            function() {
                let submenu = $(this).find("> .header__collections-submenu");

                if (submenu.length && submenu.offset().left + submenu.innerWidth() > $(window).width()) {
                    submenu.addClass("is-right");
                }
            },
            function() {
                $(this).find("> .header__collections-submenu").removeClass("is-right");
            }
        )

        $(widget).find(".js-show-touch-submenu").on("click", function() {
            let root_item = $(this).parents(".header__collections-item:last");
            let cur_item = $(this).parents(".header__collections-item:first");
            let submenu = cur_item.find("> .header__collections-submenu");

            if ($(window).width() >= mobilePoint) {
                if ($(this).parents(".cut-list__more-content").length) {
                    $(this).parents(".cut-list__more-content").find("> .header__collections-item.is-show").each(function() {
                        if ($(this).is(root_item) == false) {
                            $(this).removeClass("is-show is-right").find(".header__collections-item.is-show").removeClass("is-show is-right");
                        }
                    });
                } else {
                    $(widget).find(".header__collections > .header__collections-item.is-show").each(function() {
                        if ($(this).is(root_item) == false) {
                            $(this).removeClass("is-show is-right").find(".header__collections-item.is-show").removeClass("is-show is-right");
                        }
                    });
                }
            }

            cur_item.toggleClass("is-show");

            if (submenu.length && submenu.offset().left + submenu.innerWidth() > $(window).width()) {
                submenu.addClass("is-right");
            }
            $('.is-show .is-show').parent('.header__collections-submenu-content').addClass('submenu-sub');
            //$('.is-show .is-show').parent('.header__collections-submenu-content').prev('.header__collections-submenu-title').addClass('hide-zag');
        });
        $(widget).find(".header__collections-show-submenu-btn").on("click", function() {
            $('.header__collections').addClass('sub-open');
            $('.menu').addClass('hidden');
            $('.side-panel__content').scrollTop(0);
            $('.header__collections-submenu-content').scrollTop(0);
            $(this).parents('.is-current').find('.header__collections-submenu-title').removeClass('hide-zag');
        });
        $(widget).find(".header__collections-submenu-content .header__collections-show-submenu-btn").on("click", function() {
            $(".submenu-sub").parents(".header__collections-item.is-show").addClass("has-sub");
        });



        $(document).on("click", function(event) {
            if ($(event.target).closest(".header__collections").length) {
                return;
            }

            if ($(window).width() >= mobilePoint && $(widget).css("--catalog-location") != 'side-panel') {
                $(widget).find(".header__collections-item").removeClass("is-show is-right");
            }
        });

        $(widget).find(".cut-list__drop-toggle").on("click", function() {
            if ($(window).width() >= mobilePoint) {
                $(widget).find(".header__collections-item").removeClass("is-show is-right");
            }
        })

        $(widget).find(".js-show-search").on("click", function() {
            let window_w = $(window).width();
            let search_block = $(this).parents(".header__search");
            let search_form = search_block.find(".header__search-form");
            let search_field_width = 0;

            if (window_w > 1024) {
                search_field_width = window_w - (window_w - $(this).offset().left) * 2;
            } else {
                search_field_width = $(widget).find(".header__area-logo").innerWidth() - 20;
            }

            if (search_block.is(".is-show")) {
                search_block.removeClass("is-show");
                $(widget).find(".header__logo").removeClass("is-hide");
            } else {
                search_form.css("width", search_field_width)
                $(widget).find(".header__logo").addClass("is-hide");
                search_block.addClass("is-show");

                setTimeout(function() {
                    search_block.find(".header__search-field").focus();
                }, 50);
            }
        });

        $(widget).find(".js-show-side-panel").on("click", function() {
            $(widget).find(".header-overlay").addClass("is-show");
            $(widget).find(".side-panel").addClass("is-show");
            $(widget).find(".header").addClass("side-panel-show");
            $(widget).find(".side-panel").css("visibility", "");
            $(widget).find(".header__collections").children(".header__collections-item.is-current").removeClass("is-show");
            if ($(".side-panel").hasClass("is-show")) {
                bodyScrollLock.disableBodyScroll('.side-panel');
                $("body").css("overflow", "hidden");
            } else {
                bodyScrollLock.clearAllBodyScrollLocks();
                $("body").css("overflow", "auto");
            }

            if ($(".header__collections").children(".header__collections-item").hasClass("is-current")) {
                $(".header__collections").removeClass("sub-open");
            }
        });

        $(widget).find(".js-hide-side-panel").on("click", function() {
            $(widget).find(".header-overlay").removeClass("is-show");
            $(widget).find(".header").removeClass("side-panel-show");
            $(widget).find(".side-panel").removeClass("is-show");
            bodyScrollLock.clearAllBodyScrollLocks();
        });

        $(widget).find(".js-toggle-languages-list").on("click", function() {
            $(this).parents(".header__languages").toggleClass("is-show");
        });
    });

    $(window).on('load', function() {
        $(widget).find(".js-cut-list-collections").resize();
        $(widget).find(".side-panel").css("visibility", "");
    });

    $(window).on('resize', function() {
        // Для touch-устройств resize срабатывает при появление клавиатуры
        if (!isTouch) {
            $(widget).find(".header__search").removeClass("is-show");
            $(widget).find(".header__logo").removeClass("is-hide");
        }
    });

    $(function() {
        EventBus.subscribe(['widget:input-setting:insales:system:editor', 'widget:change-setting:insales:system:editor'], () => {
            $(widget).find(".js-cut-list-collections").resize();
            $(widget).find(".header__search").removeClass("is-show");
            $(widget).find(".header__logo").removeClass("is-hide");
        });
    });

    // переключаем класс при скролле страницы
    $(function() {

        $(widget).find('.header__collections-submenu-title').click(function() {
            $(this).closest('.header__collections-item').removeClass('is-show');
            $(this).closest('.header__collections-submenu-content').removeClass('submenu-sub');
            $(this).closest('.header__collections-submenu-content').prev('.header__collections-submenu-title').removeClass('hide-zag');
            if (!$('.side-panel .header__collections > .header__collections-item').hasClass('is-show')) {
                $('.header__collections').removeClass('sub-open');
                $('.menu').removeClass('hidden');
            }
            if ($('.side-panel .header__collections > .header__collections-item.is-show').hasClass("is-current")) {
                $('.header__collections').removeClass('sub-open');
                $('.menu').removeClass('hidden');
            }
            $(this).closest(".header__collections-item.is-show").removeClass("has-sub");
        });
        $widget.wrap("<div class='header-wrapper'></div>");
        let headerHeight = $(widget).height();
        $('.header-wrapper').css('height', headerHeight);
        $('.header-wrapper').css('position', 'relative');
        $widget.addClass('default');
        let scrollPos = 0;
        let subHeader = $widget;
        $(window).scroll(function() {
            let st = $(this).scrollTop();
            if (st > scrollPos) {
                subHeader.addClass('out-animation').removeClass('scroll-top');
                subHeader.removeClass('default');
            } else if (st === 0) {
                subHeader.removeClass('out-animation');
                subHeader.removeClass('scroll-top');
                subHeader.addClass('default');
            } else if (st < 0) {
                subHeader.removeClass('scroll-top');
                subHeader.addClass('out-animation');
                subHeader.addClass('default');
            } else {
                subHeader.removeClass('out-animation').addClass('scroll-top');
                subHeader.removeClass('default');
            }
            scrollPos = st;
        });
    });

} catch (error) {
    console.error('Widget "widget-type_widget_v4_header_7_ef6252f3fa9d1231cede5648ef531b61" throwed an error: "' + error.stack + '"')
};

// need fix

try {
    let widget = '.widget-type_widget_v4_special_products_6_b34ca9e583b27a988f0c5384959bb2f0';
    let $widget = $('.widget-type_widget_v4_special_products_6_b34ca9e583b27a988f0c5384959bb2f0');
    var isTouch = !!('ontouchstart' in window || navigator.msMaxTouchPoints);
    var mobile_point = 767;

    if (isTouch) {
        $(widget).find(".product-preview").addClass("is-touch");
    }

    $widget.each(function(index, el) {
        new LazyLoad({
            container: $(el).get(0),
            elements_selector: '.lazyload',
            use_native: 'loading' in document.createElement('img')
        });
    });

    $(function() {
        let specialProducts = $widget.find(".js-special-products");

        specialProducts.each(function() {
            let special_products_block = $(this);
            let slider_block = special_products_block.find(".js-special-products-slider");
            let slide_min_width = 160;
            let slide_min_width_mobile = 130;
            let slide_gap = 30;
            let slide_gap_mobile = 15;
            let slider_mobile_right_padding = 50;

            if (slider_block.is("[data-slide-min-width]")) {
                slide_min_width = parseInt(slider_block.attr("data-slide-min-width"));
            } else {
                slider_block.attr("data-slide-min-width", slide_min_width);
            }

            if (slider_block.is("[data-slide-min-width-mobile]")) {
                slide_min_width_mobile = parseInt(slider_block.attr("data-slide-min-width-mobile"));
            } else {
                slider_block.attr("data-slide-min-width-mobile", slide_min_width_mobile);
            }

            if (slider_block.is("[data-slide-gap]")) {
                slide_gap = parseInt(slider_block.attr("data-slide-gap"));
            } else {
                slider_block.attr("data-slide-gap", slide_gap);
            }

            if (slider_block.is("[data-slide-gap-mobile]")) {
                slide_gap_mobile = parseInt(slider_block.attr("data-slide-gap-mobile"));
            } else {
                slider_block.attr("data-slide-gap-mobile", slide_gap_mobile);
            }

            if (slider_block.is("[data-mobile-right-padding]")) {
                slider_mobile_right_padding = parseInt(slider_block.attr("data-mobile-right-padding"));
            } else {
                slider_block.attr("data-mobile-right-padding", slider_mobile_right_padding);
            }

            let init_slide_min_width = isMobileWidth() ? slide_min_width_mobile : slide_min_width;
            let init_slide_gap = isMobileWidth() ? slide_gap_mobile : slide_gap;

            let mobile_left_padding = slider_block.parents(".layout").css("--layout-side-padding");
            let mobile_right_padding = `${slider_mobile_right_padding + init_slide_gap}px`;

            slider_block[0].splide = new Splide(slider_block[0], {
                perPage: getSlidesPerView(slider_block, init_slide_min_width, init_slide_gap),
                gap: init_slide_gap,
                perMove: 1,
                breakpoints: {
                    768: {
                        padding: {
                            left: mobile_left_padding,
                            right: mobile_right_padding
                        }
                    }
                }
            });

            $(window).on("resize", function() {
                let slide_min_width = parseInt(slider_block.attr("data-slide-min-width"));
                let slide_min_width_mobile = parseInt(slider_block.attr("data-slide-min-width-mobile"));
                let slide_gap = parseInt(slider_block.attr("data-slide-gap"));
                let slide_gap_mobile = parseInt(slider_block.attr("data-slide-gap-mobile"));
                let slider_mobile_right_padding = parseInt(slider_block.attr("data-mobile-right-padding"));

                let init_slide_min_width = isMobileWidth() ? slide_min_width_mobile : slide_min_width;
                let init_slide_gap = isMobileWidth() ? slide_gap_mobile : slide_gap;

                if (isMobileWidth()) {
                    let mobile_left_padding = slider_block.parents(".layout").css("--layout-side-padding");
                    let mobile_right_padding = `${slider_mobile_right_padding + init_slide_gap}px`;

                    slider_block[0].splide.options = {
                        gap: init_slide_gap,
                        perPage: getSlidesPerView(slider_block, init_slide_min_width, init_slide_gap),
                        padding: {
                            left: mobile_left_padding,
                            right: mobile_right_padding
                        }
                    };
                } else {
                    slider_block[0].splide.options = {
                        gap: init_slide_gap,
                        perPage: getSlidesPerView(slider_block, init_slide_min_width, init_slide_gap)
                    };
                }

                configureDragOption(slider_block);
            });

            slider_block[0].splide.on('arrows:updated', function() {
                let special_products = slider_block.parents(".js-special-products");
                let prev_btn = special_products.find(".special-products__slider-arrow-prev");
                let next_btn = special_products.find(".special-products__slider-arrow-next");

                if (special_products.find(".splide__arrow--prev").prop("disabled") === true) {
                    prev_btn.addClass("is-disabled");
                } else {
                    prev_btn.removeClass("is-disabled");
                }

                if (special_products.find(".splide__arrow--next").prop("disabled") === true) {
                    next_btn.addClass("is-disabled");
                } else {
                    next_btn.removeClass("is-disabled");
                }
            });

            slider_block[0].splide.on('mounted updated', function() {
                displaySliderControls(slider_block);
            });

            slider_block[0].splide.on('mounted', function() {
                configureDragOption(slider_block);
            });

            slider_block[0].splide.mount();

            $widget.find(".js-move-slide").on("click", function() {
                let slider_node = $(this).parents(".js-special-products").find(".js-special-products-slider");

                if (slider_node.length) {
                    let sliderInst = slider_node[0].splide;

                    if ($(this).is(".special-products__slider-arrow-prev")) {
                        sliderInst.go('-');
                    }

                    if ($(this).is(".special-products__slider-arrow-next")) {
                        sliderInst.go('+');
                    }
                }
            });
        });

        /* SHOW MODAL PREVIEW */

        EventBus.subscribe('change_variant:insales:product', function(data) {
            let is_product_instance_in_modal_panel = !!$(data.action.product[0]).parents(".modal-product-preview.is-open").length;

            if (data.action && data.action.product && data.first_image.url && is_product_instance_in_modal_panel) {
                let product_node = $(data.action.product[0]);
                product_node.find(".product-preview__photo img").attr("src", data.first_image.medium_url);
            }
        });

        EventBus.subscribe(['widget:input-setting:insales:system:editor', 'widget:change-setting:insales:system:editor'], (data) => {
            $widget.each(function(index, el) {
                if (data.widget_id == $(el).parents(".editable-widget").data("widgetId")) {
                    let widget_slider_node = $('[data-widget-id="' + data.widget_id + '"] .js-special-products-slider');

                    if (widget_slider_node.length) {
                        widget_slider_node.each(function() {
                            updateSpecialProductSlider($(this), data);
                        });
                    }
                }
            });
        });
    });

    function updateSpecialProductSlider(slider, data) {
        let sliderInst = slider[0].splide;

        let slide_min_width = parseInt(slider.attr("data-slide-min-width"));
        let slide_min_width_mobile = parseInt(slider.attr("data-slide-min-width-mobile"));
        let slide_gap = parseInt(slider.attr("data-slide-gap"));
        let slide_gap_mobile = parseInt(slider.attr("data-slide-gap-mobile"));
        let slider_mobile_right_padding = parseInt(slider.attr("data-mobile-right-padding"));

        if (data.setting_name == 'slide-width') {
            let new_slide_min_width = parseInt(data.value);
            slider.attr("data-slide-min-width", new_slide_min_width);

            if (!isMobileWidth()) {
                let new_per_page = getSlidesPerView(slider, new_slide_min_width, slide_gap);
                sliderInst.options = {
                    perPage: new_per_page
                };
            }
        } else if (data.setting_name == 'slide-width-mobile') {
            let new_slide_min_width_mobile = parseInt(data.value);
            slider.attr("data-slide-min-width-mobile", new_slide_min_width_mobile);

            if (isMobileWidth()) {
                let new_per_page = getSlidesPerView(slider, new_slide_min_width_mobile, slide_gap_mobile);
                sliderInst.options = {
                    perPage: new_per_page
                };
            }
        } else if (data.setting_name == 'slide-gap') {
            let new_slide_gap = parseInt(data.value);
            let new_per_page = getSlidesPerView(slider, slide_min_width, new_slide_gap);
            slider.attr("data-slide-gap", new_slide_gap);

            if (!isMobileWidth()) {
                sliderInst.options = {
                    gap: new_slide_gap,
                    perPage: new_per_page,
                };
            }
        } else if (data.setting_name == 'slide-gap-mobile') {
            let new_slide_gap_mobile = parseInt(data.value);
            let new_per_page = getSlidesPerView(slider, slide_min_width_mobile, new_slide_gap_mobile);
            slider.attr("data-slide-gap-mobile", new_slide_gap_mobile);

            if (isMobileWidth()) {
                let mobile_left_padding = slider.parents(".layout").css("--layout-side-padding");
                let mobile_right_padding = `${slider_mobile_right_padding + new_slide_gap_mobile}px`;

                sliderInst.options = {
                    gap: new_slide_gap_mobile,
                    perPage: new_per_page,
                    padding: {
                        left: mobile_left_padding,
                        right: mobile_right_padding
                    }
                };
            }
        } else {
            setTimeout(function() {
                let init_slide_min_width = isMobileWidth() ? slide_min_width_mobile : slide_min_width;
                let init_slide_gap = isMobileWidth() ? slide_gap_mobile : slide_gap;

                let new_per_page = getSlidesPerView(slider, init_slide_min_width, init_slide_gap);
                sliderInst.options = {
                    perPage: new_per_page
                };
            }, 0);
        }

        configureDragOption(slider);
    }

    function getSlidesPerView(sliderBlock, slideMinWidth, slideGap) {
        let right_padding = 0;

        if (sliderBlock.is("[data-mobile-right-padding]") && isMobileWidth()) {
            right_padding = parseInt(sliderBlock.data("mobileRightPadding")) + slideGap;
        }

        return Math.floor((sliderBlock.width() + slideGap - right_padding) / (slideMinWidth + slideGap));
    }

    function displaySliderControls(slider) {
        let sliderInst = slider[0].splide;
        let special_products = slider.parents(".js-special-products");
        let slider_arrow = special_products.find(".special-products__slider-arrow");

        if (sliderInst.length <= sliderInst.options.perPage) {
            slider_arrow.addClass("is-hide");
            slider.addClass("is-hide-paging");
        } else {
            slider_arrow.removeClass("is-hide");
            slider.removeClass("is-hide-paging");
        }
    }

    function configureDragOption(slider) {
        if (slider[0].splide.length <= slider[0].splide.options.perPage) {
            slider[0].splide.options = {
                drag: false
            };
        } else {
            slider[0].splide.options = {
                drag: true
            };
        }
    }

    function isMobileWidth() {
        return $(window).width() <= mobile_point;
    }

} catch (error) {
    console.error('Widget "widget-type_widget_v4_special_products_6_b34ca9e583b27a988f0c5384959bb2f0" throwed an error: "' + error.stack + '"')
};
try {
    let widget = '.widget-type_widget_v4_collections_on_index_1_b06329544b232d16672619cf41f98323';
    let $widget = $('.widget-type_widget_v4_collections_on_index_1_b06329544b232d16672619cf41f98323');
    $(function() {
        $widget.each(function(index, el) {
            new LazyLoad({
                container: $(el).get(0),
                elements_selector: '.lazyload'
            });
        });
    });

} catch (error) {
    console.error('Widget "widget-type_widget_v4_collections_on_index_1_b06329544b232d16672619cf41f98323" throwed an error: "' + error.stack + '"')
}