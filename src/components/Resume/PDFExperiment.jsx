import { CodeIcon, LinkIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { resumeInfo } from './resumeInfo.ts';

const PDFExperiment = () => {
    const contactInfo = [
        {
            icon: <MailIcon className='w-4 h-4 text-indigo-500' />,
            text: "cfarber@purdue.edu"
        },
        {
            icon: <LinkIcon className="w-4 h-4 text-indigo-500" />,
            text: "chrisfarbs.com"
        },
        {
            icon: <PhoneIcon className="w-4 h-4 text-indigo-500" />,
            text: "915-490-6814"
        },
        {
            icon: <CodeIcon className="w-4 h-4 text-indigo-500" />,
            text: "github.com/farbs03"
        }
    ]

    const styles = StyleSheet.create({
        page: { padding: '1in', fontSize: "10px", backgroundColor: "white" },
        name: { fontWeight: "bold", fontSize: "14px" },
        header: { display: "flex", justifyContent: "space-between", alignItems: "center" },
        contact: { display: "flex", alignItems: "center", gap: "4px" },
        sectionTitle: { color: "rgb(99 102 241)", fontSize: "12px", marginBottom: "8px" },
        itemHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" }
    });

    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.header}>
                    <Text style={styles.name}>Christopher Farber</Text>
                    {contactInfo.map((contact) => (
                        <Text key={contact.text} style={styles.contact}>
                            <Text>{contact.text}</Text>
                        </Text>
                    ))}
                </Text>
                {resumeInfo.map((section) => (
                    <View key={section.title}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <View style={section.title === "Technologies" ? 
                                {display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.5rem"} :
                                {display: "flex", flexDirection: "column", gap: "0.5rem"} 
                            } 
                        >
                            {section.items.map((item) => (
                                <View key={item.title}>
                                    <Text style={styles.itemHeader}>
                                        <Text><Text style={{ fontWeight: "700" }}>{item.title}</Text><Text style={{ fontStyle: "italic" }}>{item.position ? ` - ${item.position}` : ""}</Text></Text>
                                        {item.startDate && <Text style={{ color: "rgb(107 114 128)" }}>{item.startDate} - {item.endDate}</Text>}
                                    </Text>
                                    <View style={{ listStyleType: "disc", marginLeft: "16px" }}>
                                        {item.bullets.map((bullet) => (
                                            <Text key={bullet}>{bullet}</Text>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </Page>
            
        </Document>
    )
}

export default PDFExperiment