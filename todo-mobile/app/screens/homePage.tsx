
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import api from '../services/api'
import Loading from '../components/Loading'

export default function HomePage() {
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState<any[]>([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        async function taskEffect() {
            try {
                const response = await api.get('/tasks')
                setTask(response.data)
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setLoading(false)
            }

        }
        taskEffect()
    }, [])

    async function handleCreate() {
        const response = await api.post('/tasks', { title })
        console.log(response.data)
        setTask(prev => [...prev, response.data])
        setTitle('')
    }

    async function handleUpdate(id: string) {
        const response = await api.patch('/tasks/' + id + '/done')
        console.log(response.data)
        setTask(prev => prev.map(t => t.id === id ? { ...t, done: true } : t))
    }

    async function handleDelete(id: string) {
        await api.delete('/tasks/' + id)
        setTask(prev => prev.filter(t => t.id !== id))
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={task}
                renderItem={({ item }) => (
                    <View>
                        <Text style={[styles.task, item.done && styles.taskDone]}>
                            {item.title}
                        </Text>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <Text style={styles.deleteButton}>Deletar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUpdate(item.id)}>
                            <Text style={styles.doneButton}>Feito</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

            <TextInput
                style={styles.textInput}
                value={title}
                onChangeText={setTitle}
                placeholder='Nova Task'
            />

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={handleCreate}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskDone: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    doneButton: {
        color: 'green',
        marginTop: 5,
    },
    task: {
        width: 300,
        marginTop: 20,
        borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textInput: {
        width: 200,
        height: 30,
        borderWidth: 0.5,
        fontSize: 20,
        color: '#000',
        marginBottom: 50,
    },
    containerButton: {
        flexDirection: 'row',
        gap: 8
    },
    deleteButton: {
        color: 'red',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 8,
        marginBottom: 50
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
})