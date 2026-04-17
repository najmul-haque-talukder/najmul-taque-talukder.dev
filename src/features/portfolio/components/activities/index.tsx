import { CollapsibleList } from "@/components/collapsible-list"
import { ACTIVITIES } from "../../data/activities"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ActivityItem } from "./activity-item"

export function Activities() {
  return (
    <Panel id="activities">
      <PanelHeader>
        <PanelTitle>
          Extra Activities
          <PanelTitleSup>({ACTIVITIES.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={ACTIVITIES}
        max={2}
        renderItem={(item) => <ActivityItem activity={item} />}
      />
    </Panel>
  )
}
