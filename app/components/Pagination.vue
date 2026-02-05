<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    currentPage: number
    totalPages: number
}>()

const emit = defineEmits<{
    (e: 'changePage', page: number): void
}>()

const pages = computed(() => {
    const result: (number | string)[] = []
    const current = props.currentPage
    const total = props.totalPages

    if (total <= 7) {
        // Показываем все страницы
        for (let i = 1; i <= total; i++) {
            result.push(i)
        }
    } else {
        // Показываем с многоточием
        result.push(1)

        if (current <= 3) {
            // Начало: 1 2 3 4 ... 10
            for (let i = 2; i <= 4; i++) {
                result.push(i)
            }
            result.push('...')
        } else if (current >= total - 2) {
            // Конец: 1 ... 7 8 9 10
            result.push('...')
            for (let i = total - 3; i <= total - 1; i++) {
                result.push(i)
            }
        } else {
            // Середина: 1 ... 4 5 6 ... 10
            result.push('...')
            for (let i = current - 1; i <= current + 1; i++) {
                result.push(i)
            }
            result.push('...')
        }

        result.push(total)
    }

    return result
})

function changePage(page: number) {
    if (page === props.currentPage || page < 1 || page > props.totalPages) {
        return
    }
    emit('changePage', page)
}
</script>

<template>
    <div class="pagination">
        <button
            v-for="(page, index) in pages"
            :key="index"
            :class="{ active: page === currentPage, dots: page === '...' }"
            :disabled="page === '...'"
            @click="typeof page === 'number' ? changePage(page) : undefined"
        >
            {{ page }}
        </button>
    </div>
</template>

<style scoped>
.pagination {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 30px 0;
    justify-content: center;
}

.pagination button {
    min-width: 40px;
    height: 40px;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: var(--color-5);
    transition: all 0.2s;
}

.pagination button:not(.dots):not(.active):hover {
    color: var(--color-3);
    background: var(--color-4);
}

.pagination button.active {
    color: var(--color-2);
    font-weight: 500;
}

.pagination button.dots {
    cursor: default;
}

.pagination button:disabled {
    cursor: default;
}
</style>
