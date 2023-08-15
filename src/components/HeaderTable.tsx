import { UserWithDate } from "../dto/TypesUser"

interface HeaderTableProps {
    onPropertyChange : (property: keyof UserWithDate) => void
}

const HeaderTable:React.FC<HeaderTableProps> = ({onPropertyChange}) => {
    return (      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => onPropertyChange("Name")}>
              Name
            </button>
          </th>

          <th>
            <button type="button" onClick={() => onPropertyChange("Date")}>
              Date
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => onPropertyChange("FavoriteFood")}
            >
              Favorite Food
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => onPropertyChange("FavoriteMovie")}
            >
              Favorite Movie
            </button>
          </th>
        </tr>
      </thead>)
}

export default HeaderTable