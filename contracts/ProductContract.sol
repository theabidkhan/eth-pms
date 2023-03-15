// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ProductContract {
    string public myName = "MD ABID KHAN";

    function getName() public view returns (string memory Name) {
        return myName;
    }

    struct Product {
        address Owner;
        string Id;
        string Name;
        string Colour;
        uint Status;
    }
    Product public pr;

    string[] ProductIdList;
    mapping(string => Product) products;

    event productCreation(
        string indexed id,
        string indexed name,
        string indexed colour
    );
    event ownerChanged(string indexed id, address indexed newOwner);

    function addProduct(
        string memory id,
        string memory name,
        string memory colour
    ) public {
        products[id].Id = id;
        products[id].Name = name;
        products[id].Colour = colour;
        products[id].Owner = msg.sender;
        products[id].Status = 0;

        ProductIdList.push(id);
        emit productCreation(id, name, colour);
    }
    
    // function values() public{
    //     Product memory pr1= Product(msg.sender,"idgiven","abid","yellow",0);
    //     pr=pr1;

    // }

    function changeProductOwner(string memory id, address to) public {
        require(
            msg.sender == products[id].Owner,
            "Only owner can change the status"
        );
        products[id].Owner = to;
        emit ownerChanged(id, to);
    }

    function getProductById(
        string memory productId
    )
        public
        view
        returns (
            address Owner,
            string memory Id,
            string memory Name,
            string memory Colour,
            uint Status
        )
    {
        Product memory p = products[productId];
        return (p.Owner, p.Id, p.Name, p.Colour, p.Status);
    }

    function getProductById1(
        string memory productId
    ) public view returns (Product memory) {
        Product memory p = products[productId];
        return p;
    }

    function getProductCounts() public view returns (uint) {
        return ProductIdList.length;
    }
}
