export default {
  _rpcCall(method, params) {
    // This is just random data.
    // In order for this to work you need to start the rpc server manually and
    // replace these values.
    // TODO: start server automatically
    const port = 40962;
    const token = 'V_QImLa9qudPg0rXLoeZvwR2LQpqFL77stHPm5yHTDs';

    const url = `http://localhost:${port}/api/v1`
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "token": token,
    })

    const payload = {
      "method": method,
      "params": params,
      "jsonrpc": "2.0",
      'id': 0,
    }

    const request = new Request(url, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      mode: 'cors',
      cache: 'default'
    });

    return fetch(request).then(response => response.json());
    // console.group("RPC Call")
    // const response = fetch(request)
    //   .then(response => {
    //     // Convert to JSON
    //     return response.json();
    //   }).then(function(j) {
    //     // `j` is a JavaScript object
    //     return(j);
    //   });
    // // console.groupEnd();
    // return response;
  },

  openVault(username, password, vault_name) {
    const params = {
      username,
      password,
      vault_name,
    }
    const response = this._rpcCall(
      "App.open_vault", params);

    return response;
  },

  getAll() {
    return this._rpcCall("App.get_all");
  },

}
