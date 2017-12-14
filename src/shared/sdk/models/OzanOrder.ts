/* tslint:disable */

declare var Object: any;
export interface OzanOrderInterface {
  "id"?: number;
  "orderDate"?: Date;
  "buyerName"?: string;
  "companyName"?: string;
  "address"?: string;
  "shippedTo"?: string;
  "invoiceTo"?: string;
  "vendorName"?: string;
  "trackingNo"?: string;
  "deliveryDate"?: Date;
  "amount"?: string;
  "totalAmount"?: string;
  "status"?: string;
}

export class OzanOrder implements OzanOrderInterface {
  "id": number;
  "orderDate": Date;
  "buyerName": string;
  "companyName": string;
  "address": string;
  "shippedTo": string;
  "invoiceTo": string;
  "vendorName": string;
  "trackingNo": string;
  "deliveryDate": Date;
  "amount": string;
  "totalAmount": string;
  "status": string;
  constructor(data?: OzanOrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OzanOrder`.
   */
  public static getModelName() {
    return "OzanOrder";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OzanOrder for dynamic purposes.
  **/
  public static factory(data: OzanOrderInterface): OzanOrder{
    return new OzanOrder(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'OzanOrder',
      plural: 'OzanOrders',
      path: 'OzanOrders',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "orderDate": {
          name: 'orderDate',
          type: 'Date'
        },
        "buyerName": {
          name: 'buyerName',
          type: 'string'
        },
        "companyName": {
          name: 'companyName',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "shippedTo": {
          name: 'shippedTo',
          type: 'string'
        },
        "invoiceTo": {
          name: 'invoiceTo',
          type: 'string'
        },
        "vendorName": {
          name: 'vendorName',
          type: 'string'
        },
        "trackingNo": {
          name: 'trackingNo',
          type: 'string'
        },
        "deliveryDate": {
          name: 'deliveryDate',
          type: 'Date'
        },
        "amount": {
          name: 'amount',
          type: 'string'
        },
        "totalAmount": {
          name: 'totalAmount',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
