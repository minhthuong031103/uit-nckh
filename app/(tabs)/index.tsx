import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {
  ConnectWallet,
  useSwitchChain,
  getProviderFromRpcUrl,
  useSDK,
} from '@thirdweb-dev/react-native';
import { Ethereum, BinanceTestnet } from '@thirdweb-dev/chains';

export default function TabOneScreen() {
  const sdk = useSDK();
  const provider = sdk?.getProvider();
  console.log(window.ethereum, 'asd');
  console.log(
    BinanceTestnet.networkId,
    getProviderFromRpcUrl(
      'https://bsc-testnet.blockpi.network/v1/rpc/public',
      {}
    )
  );

  const switchChain = useSwitchChain();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity onPress={() => switchChain(BinanceTestnet.chainId)}>
        <Text>Switch Chain</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          await provider?.request({
            method: 'eth_requestAccounts',
          });
        }}
      >
        <Text>Switch Chain</Text>
      </TouchableOpacity>

      <ConnectWallet />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
