import { useState } from "react"
import { UserWithDate } from "../dto/TypesUser"

interface HeaderTableProps {
    onPropertyChange : (property: keyof UserWithDate) => void,
    sortedItem:{
      property: string;
      asc: boolean;
  }
}

const HeaderTable:React.FC<HeaderTableProps> = ({onPropertyChange , sortedItem}) => {
  const checkingUpate= (text:string)=>{
    return sortedItem.property===text ? 'active' : '';
  };
    return (      <thead>
        <tr>
          <th>
            <button type="button" className={checkingUpate('Name')} onClick={() => onPropertyChange("Name")}>
              Name
            </button>
          </th>

          <th>
            <button type="button" className={checkingUpate('Date')} onClick={() => onPropertyChange("Date")}>
              Date
            </button>
          </th>
          <th>
            <button
              type="button"
              className={checkingUpate('FavoriteFood')}
              onClick={() => onPropertyChange("FavoriteFood")}
            >
              Favorite Food
            </button>
          </th>
          <th>
            <button
              type="button"
              className={checkingUpate('FavoriteMovie')}
              onClick={() => onPropertyChange("FavoriteMovie")}
            >
              Favorite Movie
            </button>
          </th>
        </tr>
      </thead>)
}

export default HeaderTable