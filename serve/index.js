const express = require("express");
const { fetchSelectedText, highlightSketch } = require("./utils/tasks");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/:start/:end', function(req, res) { 
    const index0 = req.params.start
    const index1 = req.params.end
    const characters = index1 - index0
    console.log(characters)

    // try {
    //     selectedText = await fetchSelectedText({index0, index1})
    // } catch(err) {
    //     return next(err)
    // }

    // try {
    //     // this should be base64 encoded, therefore no need to upload to Arweave and have keys here or anything
    //     img = await highlightSketch({selectedText})
    // } catch(err) {
    //     return next(err)
    // }

    var metadata = {
        name: `Signature NFT`,
        description: `A unique sign of our times, selected to represent increasingly significant money in this infinite game we are playing together. As you consider these unique symbols, remember that wealth truly means having enough to share.`,
        attributes: [
          {
            "trait_type": "Pattern",
            "value": "Phyllotaxis"
          },
          {
            "trait_type": "Attribute",
            "value": "Signed"
          },
          {
            "trait_type": "Attribute",
            "value": "Sealed"
          },
          {
            "trait_type": "Attribute",
            "value": "Delivered"
          },
          {
            "trait_type": "Characters",
            "value": `${characters}`
          },
        ],
        external_url: "https://sign.kernel.community",
        image: "blah" 
      }

    res.send(metadata)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});