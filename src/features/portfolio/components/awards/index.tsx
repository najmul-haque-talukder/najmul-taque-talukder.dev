import { CollapsibleList } from "@/components/collapsible-list"
import { AWARDS } from "../../data/awards"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { AwardItem } from "./award-item"

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          Awards
          <PanelTitleSup>({AWARDS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={AWARDS}
        max={2}
        renderItem={(item) => <AwardItem award={item} />}
      />
    </Panel>
  )
}
