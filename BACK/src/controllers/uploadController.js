exports.uploadFile = (req, res) => {
    console.log(req.body.obj);
    console.log(req.file);
    res.json({ message: "Successfully uploaded files" });
  };