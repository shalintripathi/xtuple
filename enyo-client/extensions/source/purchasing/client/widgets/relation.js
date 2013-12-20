/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, trailing:true,
white:true, strict:false*/
/*global enyo:true, XT:true, XV:true, Globalize:true, XM:true */

(function () {

  XT.extensions.purchasing.initRelationWidgets = function () {

    // ..........................................................
    // PURCHASE VENDOR
    //

    enyo.kind({
      name: "XV.PurchaseVendorWidget",
      kind: "XV.VendorWidget",
      collection: "XM.PurchaseVendorRelationCollection"
    });

    // ..........................................................
    // VENDOR ADDRESS
    //

    enyo.kind({
      name: "XV.VendorAddressWidget",
      kind: "XV.RelationWidget",
      collection: "XM.VendorAddressRelationCollection",
      list: "XV.VendorAddressList",
      keyAttribute: "code"
    });

  };

}());
