import React from "react";

function App() {
  return (
    <div className="App" >
      <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>

    <form text-align="center">
      first name:<input type="text" id="txtfirstname" name="txtfirstname" /><br />
      last name:<input type="text" id="txtlastname" name="txtlastname" /><br />
      <input type="reset" value="clear" />
      <input type="submit" value="submit" /><br /><br />
    </form>
   
    <table >
        <tr>
          <th>id</th>
          <th>name</th>
          <th>family</th>
          <th>action</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
