import { CollapsibleList } from "@/components/collapsible-list"
import { BOOKMARKS } from "../../data/bookmarks"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { BookmarkItem } from "./bookmark-item"

export function Bookmarks() {
  return (
    <Panel id="bookmarks">
      <PanelHeader>
        <PanelTitle>
          Bookmarks
          <PanelTitleSup>({BOOKMARKS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={BOOKMARKS}
        max={3}
        renderItem={(item) => <BookmarkItem bookmark={item} />}
      />
    </Panel>
  )
}
