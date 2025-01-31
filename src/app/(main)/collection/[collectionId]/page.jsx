import { getSingleCollection } from "@/actions/collection";
import { getJournalEntries } from "@/actions/journal";


const CollectionPage = async ({params}) => {
     const {collectionId} = params;
     const entries = await getJournalEntries({collectionId});
     const collection = await getSingleCollection(collectionId)
     console.log(entries,collection)
  return (
    <div>
      collection page
    </div>
  )
}

export default CollectionPage
