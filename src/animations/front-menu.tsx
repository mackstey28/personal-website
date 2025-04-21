import { motion, AnimatePresence } from 'framer-motion';

export function FrontMenu({ visible }: { visible: boolean }) {
    return (
        <div>
            {visible && (
                <motion.div style={{
                    fontFamily: "Fireside",
                    display: 'flex',
                    gap: '1rem',
                    position: 'absolute',
                    left: '49.2%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    textAlign: 'center'
                }}>
                    {['ABOUT', 'CONTACT', 'MISC'].map((label, index) => (
                        <motion.button
                            key={label}
                            initial={{ opacity: 0, y: 10 }}
                            exit={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ color: '#808080' }} // not working wtf!!!
                            // onClick={() => location.href="about"}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                fontSize: '1rem',
                                color: '#ffffff',
                                cursor: 'pointer',
                            }}
                        >
                            {label}
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </div>
    );
}