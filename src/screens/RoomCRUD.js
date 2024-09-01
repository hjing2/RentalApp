import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const RoomCRUD = () => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [roomRent, setRoomRent] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addRoom = () => {
    if (roomName !== '' && roomRent !== '') {
      const newRoom = { name: roomName, rent: roomRent };
      setRooms([...rooms, newRoom]);
      setRoomName('');
      setRoomRent('');
    }
  };

  const deleteRoom = (index) => {
    const newRooms = rooms.filter((_, i) => i !== index);
    setRooms(newRooms);
  };

  const editRoom = (index) => {
    setRoomName(rooms[index].name);
    setRoomRent(rooms[index].rent);
    setEditIndex(index);
  };

  const updateRoom = () => {
    if (editIndex !== null && roomName !== '' && roomRent !== '') {
      const updatedRooms = rooms.map((room, index) =>
        index === editIndex ? { name: roomName, rent: roomRent } : room
      );
      setRooms(updatedRooms);
      setRoomName('');
      setRoomRent('');
      setEditIndex(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Management</Text>

      <TextInput
        style={styles.input}
        placeholder="Room Name"
        value={roomName}
        onChangeText={setRoomName}
      />
      <TextInput
        style={styles.input}
        placeholder="Room Rent"
        value={roomRent}
        onChangeText={setRoomRent}
        keyboardType="numeric"
      />

      {editIndex !== null ? (
        <Button title="Update Room" onPress={updateRoom} />
      ) : (
        <Button title="Add Room" onPress={addRoom} />
      )}

      <FlatList
        data={rooms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.roomItem}>
            <Text style={styles.roomText}>{item.name} - ${item.rent}</Text>
            <View style={styles.roomActions}>
              <TouchableOpacity onPress={() => editRoom(index)} style={styles.editButton}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteRoom(index)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  roomItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomText: {
    fontSize: 18,
  },
  roomActions: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    backgroundColor: '#f0ad4e',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RoomCRUD;
