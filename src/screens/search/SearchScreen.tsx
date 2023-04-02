import React, { useMemo } from "react";
import { View /* StyleSheet */ } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
// import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import createStyles from "./SearchScreen.style";

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  // const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <View style={styles.container}>
      {/* <Select
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <SelectItem title="Option 1" />
        <SelectItem title="Option 2" />
        <SelectItem title="Option 3" />
      </Select> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     minHeight: 128,
//   },
// });
export default SearchScreen;
