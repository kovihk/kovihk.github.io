
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.DrO8H5xq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.TTgHQVoM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedContact.C_xwuH6g.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.CjGdvwXn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement.BT1XA2-m.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.CoU7NCDG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.BzGClA6y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.B_g3zKCr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Option.BWRMS2on.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.C7vq_HwD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.BLhxKBi9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.CDrvBB6-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.N7mPuYH-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.BJasJ1cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSessionExchange.g-3ru3Xs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedDeliveryAddress.BmtyJegP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.cz_SrhFp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.D5eFHlOj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/google-pay.Ccq61HbG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.Citzy7CG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.PYOWeeby.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/constants.C638vlSt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ButtonWithRegisterWebPixel.DO4V6uAA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/NoAddressLocationFullDetour.MpgKFmk7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.d_HY8DB4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.B9ECQAxi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.Ck3Hj77k.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.DtQnh_QP.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.DcM1B2YE.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedContact.CxMuAABI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.7LYaNSSo.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Option.BgrbqXV7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LocalizationExtensionField.CtgoyLeD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/google-pay.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ButtonWithRegisterWebPixel.B6bwbcOx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/NoAddressLocationFullDetour.DU8rC2PR.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/open_sans/opensans_n4.5460e0463a398b1075386f51084d8aa756bafb17.woff2?h1=dmFpbGxhbnRzdHVkaW8uY29t&hmac=2cfdb819a68323138744cf14a7d7e8d0d8cc8b32889715ee6d7e87eeaec90b33","https://fonts.shopifycdn.com/open_sans/opensans_n6.63a74f6cbbfef729fb07955b2d5b4cc83273862e.woff2?h1=dmFpbGxhbnRzdHVkaW8uY29t&hmac=a7e4d1d2c0fc84b162eeea0f20486dd5c0c9da0186bce1b02b6ed6422c2c4d63"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0759/2139/1917/files/VAILLANT_LOGO_black_3aad66c7-5193-4faf-b52d-f0d53d46555d_x320.png?v=1695218877"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  