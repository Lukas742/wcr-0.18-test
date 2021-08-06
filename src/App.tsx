import {
  Avatar,
  AvatarBackgroundColor,
  AvatarFitType,
  AvatarGroup,
  AvatarSize,
  Bar,
  BusyIndicator,
  Carousel,
  CheckBox,
  Label,
  List,
  MessageStrip,
  MessageStripType,
  SegmentedButton,
  ShellBar,
  StandardListItem,
  ThemeProvider,
  TimelineItem,
  ToggleButton,
  ValueState,
} from "@ui5/webcomponents-react";
import React from "react";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <BusyIndicator />
      <CheckBox wrap={true} />
      <Carousel hideNavigation={false} />
      <Label wrap>ASDASDASD</Label>
      <MessageStrip
        noIcon
        noCloseButton={false}
        type={MessageStripType.Information}
      >
        ASDASDASDAS
      </MessageStrip>
      <List>
        <StandardListItem info="Info" infoState={ValueState.Error}>
          123
        </StandardListItem>
      </List>
      <Avatar
        backgroundColor={AvatarBackgroundColor.Accent3}
        imageFitType={AvatarFitType.Contain}
      />
      <AvatarGroup avatarSize={AvatarSize.XL}>
        <Avatar />
      </AvatarGroup>
      <Bar middleContent={"Test"} />
      <SegmentedButton>
        <ToggleButton>Button 1</ToggleButton>
        <ToggleButton pressed>Button 2</ToggleButton>
      </SegmentedButton>
      <TimelineItem
        onItemNameClick={() => {}}
        itemName={"gg"}
        itemNameClickable
      />
    </ThemeProvider>
  );
}

export default App;
