import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  Flex,
  IconButton,
  Divider,
  Heading,
  Text,
  Code
} from "@chakra-ui/core";
import { pathMapStore, indexerStatusStore, appStore } from "ui/store";
import { Coffee, Activity } from "react-feather";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

function Preference({ isOpen, onClose }: Props) {
  const pathMap = useContext(pathMapStore);
  const app = useContext(appStore);
  const indexerStatus = useContext(indexerStatusStore);

  const handleUpdate = (id: string, alias: string, path: string) => {
    pathMap.update(id, alias, path);
  };

  return (
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Preference</DrawerHeader>

        <DrawerBody>
          <Heading size="sm">Directories to index</Heading>
          <Text fontSize="12px">
            Path should be relative to the folder opened in VSCode
          </Text>
          <Flex flexGrow={1} flexDirection="column" marginTop="10px">
            {[...app.directories.entries()].map(([id, directory]) => {
              return (
                <Flex key={id} alignItems="center" marginBottom="5px">
                  <Input
                    value={directory}
                    placeholder="Directory"
                    size="sm"
                    marginRight="5px"
                    onKeyDown={(e: any) => e.stopPropagation()}
                    onChange={(e: any) => {
                      app.changeDirectory(id, e.target.value);
                    }}
                  />

                  <IconButton
                    marginLeft="5px"
                    aria-label="Search database"
                    size="xs"
                    icon="close"
                    onClick={() => app.removeDirectory(id)}
                  />
                </Flex>
              );
            })}
          </Flex>
          <Flex justifyContent="flex-end" marginTop="5px" marginBottom="5px">
            <Button
              rightIcon="plus-square"
              variant="outline"
              size="xs"
              onClick={() => app.addDirectory("")}
            >
              Add another
            </Button>
          </Flex>
          <Divider />

          <Heading size="sm">Module resolution mapping</Heading>
          <Text fontSize="12px">
            If you use custom module alias in your bundler, please add them
            here. First value is the alias (e.g: <Code>components</Code>). The
            second value is the relative path which points to the actual
            directory (e.g: <Code fontSize="12px">./src/components</Code>).
          </Text>
          <Flex flexGrow={1} flexDirection="column" marginTop="10px">
            {pathMap.items.map(item => {
              return (
                <Flex key={item.id} alignItems="center" marginBottom="5px">
                  <Input
                    value={item.alias}
                    placeholder="Alias"
                    size="sm"
                    marginRight="5px"
                    onChange={(e: any) =>
                      handleUpdate(item.id, e.target.value, item.path)
                    }
                  />
                  <Input
                    value={item.path}
                    placeholder="Path"
                    size="sm"
                    onChange={(e: any) =>
                      handleUpdate(item.id, item.alias, e.target.value)
                    }
                  />
                  <IconButton
                    marginLeft="5px"
                    aria-label="Search database"
                    size="xs"
                    icon="close"
                    onClick={() => pathMap.remove(item.id)}
                  />
                </Flex>
              );
            })}
          </Flex>
          <Flex justifyContent="flex-end" marginTop="5px" marginBottom="5px">
            <Button
              rightIcon="plus-square"
              variant="outline"
              size="xs"
              onClick={() => pathMap.addNewItem("", "")}
            >
              Add another
            </Button>
          </Flex>
          <Divider />

          <Heading size="sm">Re-indexer</Heading>
          <Text fontSize="12px">Run the code indexer</Text>
          <Button
            marginTop="10px"
            leftIcon={Activity}
            variant="outline"
            width="180px"
            onClick={() => indexerStatus.initiateIndexing()}
          >
            Start Indexing
          </Button>
          <Divider />
          <Heading size="sm">Font size</Heading>
          <Text fontSize="12px">Change the font size of the text</Text>
          <Input
            value={app.fontSize}
            placeholder="Font size"
            size="sm"
            type="number"
            marginTop="10px"
            onChange={(e: any) => {
              app.changeFontSize(Number(e.target.value));
            }}
          />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Done
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default observer(Preference);
