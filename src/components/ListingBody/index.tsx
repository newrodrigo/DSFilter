import Filter from "../Filter";
import Listing from "../Listing";

export default function ListingBody() {
  return (
    <main>
      <div className="dsf-container">
        <Filter />
        <Listing />
      </div>
    </main>
  );
}
