// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ProductContract {

    struct Product {
        address Owner;
        string Id;
        string Name;
        string Color;
        uint Status;
    }

    string[] ProductIdList;
    mapping(string => Product) products;

    event productCreation(string indexed id, string indexed name,string indexed color);
    event ownerChanged(string indexed id, address indexed newOwner);

    function addProduct(string memory id,string memory name,string memory color) public {
        products[id].Id = id;
        products[id].Name = name;
        products[id].Color = color;
        products[id].Owner = msg.sender;
        products[id].Status = 0;

        ProductIdList.push(id);
        emit productCreation(id, name, color);
    }

    function changeProductOwner(string memory id, address to) public {
        require(
            msg.sender == products[id].Owner,
            "Only owner can change the status"
        );
        products[id].Owner = to;
        emit ownerChanged(id, to);
    }

    function getProductById(string memory productId)public view returns (Product memory product){
        Product memory p = products[productId];
        return (p);
    }

    function getAllProduct() public view returns (Product[] memory){
        Product[] memory prods = new Product[](ProductIdList.length);
        for (uint i = 0; i <ProductIdList.length ; i++) {
            prods[i] = products[ProductIdList[i]];
        }
        return prods;
    }   

    function getProductCounts() public view returns (uint) {
        return ProductIdList.length;
    }
}
