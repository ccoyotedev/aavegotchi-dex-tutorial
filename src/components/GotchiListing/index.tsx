import "./styles.css"

interface Props {
  id: string;
  name: string;
  collateralColor: string;
  selected: boolean;
  selectGotchi: () => void;
}

export const GotchiListing = ({ id, name, collateralColor, selected, selectGotchi }: Props) => {
 return (
    <div className={`gotchi-listing ${selected && 'selected'}`} onClick={() => selectGotchi()}>
      <div className="collateral-container">
        <div className="collateral" style={{ backgroundColor: collateralColor }} />
      </div>
      <p className="id">{id}</p>
      <p className="name">{name}</p>
   </div>
 )
}