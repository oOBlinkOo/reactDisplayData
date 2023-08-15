import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { UserWithDate } from "../dto/TypesUser";

const DisplayData: React.FC< {sortedUserDate:UserWithDate[]}> = ({ sortedUserDate }) => {
     return  (
     <tbody>
        {sortedUserDate.map((user,index) => (
          <tr key={index}>
            <td>{user.Name}</td>
            <td>{user.Date}</td>
            <td>{user.FavoriteFood}</td>
            <td>{user.FavoriteMovie}</td>
          </tr>
        ))}
      </tbody>
     )
}
export default DisplayData;