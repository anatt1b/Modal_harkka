import { useState } from 'react'
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native'

export default function App() {
  // Tila, joka kertoo onko modal auki (true) vai kiinni (false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      {/* Modal näkyy vain, kun isModalVisible on true */}
      <Modal
        visible={isModalVisible}
        transparent={true}    // ei peitä koko ruutua
        animationType="fade" // modal tulee alhaalta ylös
        onRequestClose={() => setIsModalVisible(false)} // Androidin back-nappi sulkee modalin
      >
        {/* Tumma tausta modalin takana */}
        <View style={styles.dimBackground}>
          <View style={styles.modalBox}>
            <Text>This is modal...</Text>

          {/*Close-teksti sulkee modalin*/}
          <Pressable style={styles.closebutton}onPress={() => setIsModalVisible(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
          </View>
        </View>
      </Modal>

      {/* Nappi avaa modalin */}
      <Pressable style={styles.openButton} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Pressable>
    </View>
    
  )
}

const styles = StyleSheet.create({
  // Koko ruutu: vaalenasininen tausta, sisältä keskellä
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3f2fd'},
  // avausnappi: sinine, pyöristetyt kulmat
  openButton: { backgroundColor: '#1976d2', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  // Läpinäkyvä musta tausta modalintakana
  dimBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalBox: { backgroundColor: 'white', padding: 24, borderRadius: 12, alignItems: 'center', elevation: 5 },
  modalText: {fontSize: 18, color: '#333'},

  // Sulkunappi: punainen
  closebutton: { backgroundColor: '#d32f2f', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8,},
  // Nappien teksti: valkoinen ja lihavoitu
  buttonText: {color: 'white', fontWeight: 'bold'},
})