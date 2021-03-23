exports.geterror = (request, response) => {
  response.send({
    error: "Not Found",
    Msg: "По данному маршруту ничего не найдено",
  });
};
