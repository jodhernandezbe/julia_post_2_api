using Genie, Genie.Renderer.Json, Genie.Requests

# Server config
Genie.config.run_as_server = true
Genie.config.server_host = "127.0.0.1"
Genie.config.server_port = 8000

# CORS config
Genie.config.cors_headers["Access-Control-Allow-Origin"] = "http://127.0.0.1:8080"
Genie.config.cors_headers["Access-Control-Allow-Headers"] = "Content-Type"
Genie.config.cors_headers["Access-Control-Allow-Methods"] ="GET,POST,PUT,DELETE,OPTIONS" 
Genie.config.cors_allowed_origins = ["*"]

route("/pressure", method="POST") do
  request = jsonpayload()

  # Gas constant (J/mol.K)
  R = 8.3145

  # Pressure (Pa)
  n = request["n"]
  T = request["T"]
  V = request["V"]
  P = R * n * T / V
  
  (:pressure => P) |> json
end

up()
