const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
    <book id="bk101">
        <title>XML Developer's Guide</title>
        <author>Gambardella, Matthew</author>
        <genre>Computer</genre>
        <price>44.95</price>
        <publish_date>2000-10-01</publish_date>
        <description>An in-depth look at creating applications with XML.</description>
    </book>
    <book id="bk102">
        <title>Midnight Rain</title>
        <author>Ralls, Kim</author>
        <genre>Fantasy</genre>
        <price>5.95</price>
        <publish_date>2000-12-16</publish_date>
        <description>A former architect battles corporate zombies, 
            an evil sorceress, and her own childhood to become queen 
            of the world.</description>
    </book>
</catalog>
`;

const domParser = new DOMParser();
const xmlDOM = domParser.parseFromString(xmlString, "text/xml");
console.log(xmlDOM);

const xmlSerializer = new XMLSerializer();
const xmlStringSerialized = xmlSerializer.serializeToString(xmlDOM);
console.log(xmlStringSerialized);
